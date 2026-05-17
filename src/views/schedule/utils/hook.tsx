import editForm from "../form/index.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { PaginationProps } from "@pureadmin/table";
import { scheduleApi } from "@/api/schedule";
import type { FormItemProps } from "../utils/types";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import { type Ref, h, ref, toRaw, computed, reactive, onMounted } from "vue";

function getStatusLabel(status: number) {
  switch (status) {
    case 0: return "已取消";
    case 1: return "待上课";
    case 2: return "已完成";
    case 3: return "已预约";
    default: return "未知";
  }
}

function getStatusType(status: number) {
  switch (status) {
    case 0: return "info";
    case 1: return "warning";
    case 2: return "success";
    case 3: return "primary";
    default: return "info";
  }
}

export function useSchedule(tableRef: Ref) {
  const form = reactive({
    sectionName: "",
    studentName: "",
    status: undefined as number | undefined
  });
  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);
  const selectedNum = ref(0);
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      label: "勾选列",
      type: "selection",
      fixed: "left",
      reserveSelection: true
    },
    {
      label: "排课ID",
      prop: "_id",
      width: 90
    },
    {
      label: "课节名称",
      prop: "sectionName",
      minWidth: 130
    },
    {
      label: "学生姓名",
      prop: "studentName",
      minWidth: 100
    },
    {
      label: "开始时间",
      prop: "beginDateTime",
      minWidth: 160
    },
    {
      label: "结束时间",
      prop: "endDateTime",
      minWidth: 160
    },
    {
      label: "课时费",
      prop: "hourlyfee",
      minWidth: 100,
      cellRenderer: ({ row }) => {
        return `¥${row.hourlyfee || 0}/小时`;
      }
    },
    {
      label: "总金额",
      prop: "totalFee",
      minWidth: 100,
      cellRenderer: ({ row }) => {
        return `¥${row.totalFee || 0}`;
      }
    },
    {
      label: "总课时",
      prop: "totalHour",
      minWidth: 90,
      cellRenderer: ({ row }) => {
        return `${row.totalHour || 0}小时`;
      }
    },
    {
      label: "状态",
      prop: "status",
      minWidth: 90,
      cellRenderer: ({ row, props }) => {
        return (
          <el-tag size={props.size} type={getStatusType(row.status)} effect="plain">
            {getStatusLabel(row.status)}
          </el-tag>
        );
      }
    },
    {
      label: "操作",
      fixed: "right",
      width: 240,
      slot: "operation"
    }
  ];
  const buttonClass = computed(() => {
    return [
      "h-5!",
      "reset-margin",
      "text-gray-500!",
      "dark:text-white!",
      "dark:hover:text-primary!"
    ];
  });

  function handleUpdate(row) {
    console.log(row);
  }

  async function handleDelete(row) {
    const res = await scheduleApi.delete(row._id);
    console.log(res);
    message(`您删除了排课${row.sectionName}的这条数据`, { type: "success" });
    onSearch();
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    selectedNum.value = val.length;
    tableRef.value.setAdaptive();
  }

  function onSelectionCancel() {
    selectedNum.value = 0;
    tableRef.value.getTableRef().clearSelection();
  }

  function onbatchDel() {
    const curSelected = tableRef.value.getTableRef().getSelectionRows();
    message(`已删除排课 ${getKeyList(curSelected, "sectionName")} 的数据`, {
      type: "success"
    });
    tableRef.value.getTableRef().clearSelection();
    onSearch();
  }

  async function onSearch() {
    loading.value = true;
    const { code, data } = await scheduleApi.getList(toRaw(form));
    if (code === 20000) {
      dataList.value = data?.list || [];
      pagination.total = data?.total || 0;
      pagination.pageSize = data?.pageSize || 10;
      pagination.currentPage = data?.currentPage || 1;
    }

    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  function openDialog(title = "新增", row?: FormItemProps) {
    const formData = {
      _id: row?._id ?? "",
      sectionId: row?.sectionId ?? "",
      studentId: row?.studentId ?? [],
      beginDateTime: row?.beginDateTime ?? "",
      endDateTime: row?.endDateTime ?? "",
      hourlyfee: row?.hourlyfee ?? 0,
      status: row?.status ?? 1
    };
    addDialog({
      title: `${title}排课`,
      props: {
        formInline: formData
      },
      width: "50%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: formData }),
      beforeSure: async (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = formRef.value.newFormInline;

        function chores() {
          message(`您${title}了排课${curData.sectionName || ""}的这条数据`, {
            type: "success"
          });
          done();
          onSearch();
        }
        FormRef.validate(async valid => {
          if (valid) {
            console.log("curData", curData);
            if (title === "新增") {
              const res = await scheduleApi.create(curData);
              if (res.code === 20000) {
                chores();
              } else {
                message(res.message, { type: "error" });
              }
            } else {
              const res = await scheduleApi.update(curData._id as string, curData);
              if (res.code === 20000) {
                chores();
              } else {
                message(res.message, { type: "error" });
              }
            }
          }
        });
      }
    });
  }

  onMounted(async () => {
    onSearch();
  });

  return {
    form,
    loading,
    columns,
    dataList,
    selectedNum,
    pagination,
    buttonClass,
    deviceDetection,
    onSearch,
    resetForm,
    onbatchDel,
    openDialog,
    handleUpdate,
    handleDelete,
    handleSizeChange,
    onSelectionCancel,
    handleCurrentChange,
    handleSelectionChange
  };
}
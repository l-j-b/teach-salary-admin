import editForm from "../form/index.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { PaginationProps } from "@pureadmin/table";
import { sectionApi } from "@/api/section";
import type { FormItemProps } from "../utils/types";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import { type Ref, h, ref, toRaw, computed, reactive, onMounted } from "vue";

function getStatusLabel(status: number) {
  switch (status) {
    case 2:
      return "待上课";
    case 3:
      return "已完成";
    case 5:
      return "请假";
    default:
      return "未知";
  }
}

function getStatusType(status: number) {
  switch (status) {
    case 2:
      return "warning";
    case 3:
      return "success";
    case 5:
      return "info";
    default:
      return "info";
  }
}

export function useSection(tableRef: Ref) {
  const form = reactive({
    name: "",
    courseName: "",
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
      label: "课节ID",
      prop: "_id",
      width: 90
    },
    {
      label: "课节名称",
      prop: "name",
      minWidth: 130
    },
    {
      label: "课程名称",
      prop: "courseName",
      minWidth: 130
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
      label: "总课时",
      prop: "totalHours",
      minWidth: 90,
      cellRenderer: ({ row }) => {
        return `${row.totalHours || 0}小时`;
      }
    },
    {
      label: "总收入",
      prop: "totalFee",
      minWidth: 100,
      cellRenderer: ({ row }) => {
        return `¥${row.totalFee || 0}`;
      }
    },
    {
      label: "状态",
      prop: "status",
      minWidth: 90,
      cellRenderer: ({ row, props }) => {
        return (
          <el-tag
            size={props.size}
            type={getStatusType(row.status)}
            effect="plain"
          >
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
    const res = await sectionApi.delete(row._id);
    console.log(res);
    message(`您删除了课节${row.name}的这条数据`, { type: "success" });
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
    const ids = getKeyList(curSelected, "_id");
    sectionApi.batchDelete(ids).then(() => {
      message(`已删除课节 ${getKeyList(curSelected, "name")} 的数据`, {
        type: "success"
      });
      tableRef.value.getTableRef().clearSelection();
      onSearch();
    });
  }

  async function onSearch() {
    loading.value = true;
    const { code, data } = await sectionApi.getList(toRaw(form));
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
      name: row?.name ?? "",
      courseId: row?.courseId ?? "",
      courseName: row?.courseName ?? "",
      studentId: row?.studentId ?? [],
      studentName: row?.studentName ?? "",
      beginDateTime: row?.beginDateTime ?? "",
      endDateTime: row?.endDateTime ?? "",
      hourlyfee: row?.hourlyfee ?? 0,
      totalHours: row?.totalHours ?? 0,
      totalFee: row?.totalFee ?? 0,
      status: row?.status ?? 2,
      remark: row?.remark ?? "",
      notes: row?.notes ?? ""
    };
    addDialog({
      title: `${title}课节`,
      props: {
        formInline: formData
      },
      width: "50%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () =>
        h(editForm, { ref: formRef, formInline: formData }),
      beforeSure: async (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = formRef.value.newFormInline;

        function chores() {
          message(`您${title}了课节${curData.name}的这条数据`, {
            type: "success"
          });
          done();
          onSearch();
        }
        FormRef.validate(async valid => {
          if (valid) {
            console.log("curData", curData);
            if (title === "新增") {
              const res = await sectionApi.create(curData);
              if (res.code === 20000) {
                chores();
              } else {
                message(res.message, { type: "error" });
              }
            } else {
              const res = await sectionApi.update(
                curData._id as string,
                curData
              );
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

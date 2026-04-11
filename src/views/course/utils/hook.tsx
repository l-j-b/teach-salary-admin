import dayjs from "dayjs";
import editForm from "../form/index.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { PaginationProps } from "@pureadmin/table";
import { courseApi } from "@/api/course";
import type { FormItemProps } from "../utils/types";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import { type Ref, h, ref, toRaw, computed, reactive, onMounted } from "vue";

export function useCourse(tableRef: Ref) {
  const form = reactive({
    name: ""
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
      label: "课程ID",
      prop: "id",
      width: 90
    },
    {
      label: "课程名称",
      prop: "name",
      minWidth: 130
    },
    {
      label: "课程内容",
      prop: "content",
      minWidth: 200
    },
    {
      label: "学生数量",
      prop: "studentId",
      minWidth: 90,
      cellRenderer: ({ row }) => {
        return Array.isArray(row.studentId) ? row.studentId.length : 0;
      }
    },
    {
      label: "课程状态",
      prop: "status",
      minWidth: 100,
      cellRenderer: ({ row, props }) => {
        let label = "未知";
        let type = "info";
        switch (row.status) {
          case 1:
            label = "待开始";
            type = "info";
            break;
          case 2:
            label = "进行中";
            type = "warning";
            break;
          case 3:
            label = "已完成";
            type = "success";
            break;
        }
        return (
          <el-tag size={props.size} type={type} effect="plain">
            {label}
          </el-tag>
        );
      }
    },
    {
      label: "数据状态",
      prop: "dataStatus",
      minWidth: 100,
      cellRenderer: ({ row, props }) => {
        return (
          <el-tag
            size={props.size}
            type={row.dataStatus === 1 ? "success" : "danger"}
            effect="plain"
          >
            {row.dataStatus === 1 ? "启用" : "禁用"}
          </el-tag>
        );
      }
    },
    {
      label: "备注",
      prop: "remark",
      minWidth: 200
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
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
    const res = await courseApi.delete(row.id);
    console.log(res);
    message(`您删除了课程ID为${row.id}的这条数据`, { type: "success" });
    onSearch();
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  /** 当CheckBox选择项发生变化时会触发该事件 */
  function handleSelectionChange(val) {
    selectedNum.value = val.length;
    // 重置表格高度
    tableRef.value.setAdaptive();
  }

  /** 取消选择 */
  function onSelectionCancel() {
    selectedNum.value = 0;
    // 用于多选表格，清空用户的选择
    tableRef.value.getTableRef().clearSelection();
  }

  /** 批量删除 */
  function onbatchDel() {
    // 返回当前选中的行
    const curSelected = tableRef.value.getTableRef().getSelectionRows();
    // 接下来根据实际业务，通过选中行的某项数据，比如下面的id，调用接口进行批量删除
    message(`已删除课程ID为 ${getKeyList(curSelected, "id")} 的数据`, {
      type: "success"
    });
    tableRef.value.getTableRef().clearSelection();
    onSearch();
  }

  async function onSearch() {
    loading.value = true;
    const { code, data } = await courseApi.getList(toRaw(form));
    if (code === 20000) {
      dataList.value = data.list;
      pagination.total = data.total;
      pagination.pageSize = data.pageSize;
      pagination.currentPage = data.currentPage;
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
    addDialog({
      title: `${title}课程`,
      props: {
        formInline: {
          id: row?.id ?? "",
          name: row?.name ?? "",
          content: row?.content ?? "",
          studentId: row?.studentId ?? [],
          remark: row?.remark ?? "",
          status: row?.status ?? "1",
          dataStatus: row?.dataStatus ?? "1"
        }
      },
      width: "46%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: async (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;

        // 处理学生ID数组，将逗号分隔的字符串转换为数组
        if (typeof curData.studentId === "string") {
          curData.studentId = curData.studentId
            .split(",")
            .filter(id => id.trim());
        }

        function chores() {
          message(`您${title}了课程名称为${curData.name}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        FormRef.validate(async valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              delete curData.studentId;
              const res = await courseApi.create(curData);
              if (res.code === 20000) {
                // 实际开发先调用新增接口，再进行下面操作
                chores();
              } else {
                message(res.message, {
                  type: "error"
                });
              }
            } else {
              const res = await courseApi.update(curData.id as string, curData);
              if (res.code === 20000) {
                // 实际开发先调用修改接口，再进行下面操作
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

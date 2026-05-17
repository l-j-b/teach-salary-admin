import { message } from "@/utils/message";
import type { PaginationProps } from "@pureadmin/table";
import { checkoutApi } from "@/api/checkout";
import { getKeyList } from "@pureadmin/utils";
import { type Ref, ref, toRaw, reactive, onMounted } from "vue";

function getStatusLabel(status: number) {
  switch (status) {
    case 0:
      return "待结算";
    case 1:
      return "已结算";
    case 2:
      return "已取消";
    default:
      return "未知";
  }
}

function getStatusType(status: number) {
  switch (status) {
    case 0:
      return "warning";
    case 1:
      return "success";
    case 2:
      return "info";
    default:
      return "info";
  }
}

export function useCheckout(tableRef: Ref) {
  const form = reactive({
    title: "",
    searchKeyword: ""
  });
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
      label: "结算ID",
      prop: "_id",
      width: 90
    },
    {
      label: "结算标题",
      prop: "title",
      minWidth: 150
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
      label: "总课时",
      prop: "totalHour",
      minWidth: 90,
      cellRenderer: ({ row }) => {
        return `${row.totalHour || 0}小时`;
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
      label: "创建时间",
      prop: "createDateTime",
      minWidth: 160
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    }
  ];

  async function handleDelete(row) {
    const res = await checkoutApi.delete(row._id);
    console.log(res);
    message(`您删除了结算${row.title}的这条数据`, { type: "success" });
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
    tableRef.value?.setAdaptive();
  }

  function onSelectionCancel() {
    selectedNum.value = 0;
    tableRef.value?.getTableRef().clearSelection();
  }

  function onbatchDel() {
    const curSelected = tableRef.value?.getTableRef().getSelectionRows();
    message(`已删除结算 ${getKeyList(curSelected, "title")} 的数据`, {
      type: "success"
    });
    tableRef.value?.getTableRef().clearSelection();
    onSearch();
  }

  async function onSearch() {
    loading.value = true;
    const { code, data } = await checkoutApi.getList(toRaw(form));
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

  const resetForm = () => {
    form.title = "";
    form.searchKeyword = "";
    onSearch();
  };

  async function handleExecute(row) {
    message(`执行结算: ${row.title}`, { type: "info" });
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
    onSearch,
    resetForm,
    onbatchDel,
    handleDelete,
    handleSizeChange,
    onSelectionCancel,
    handleCurrentChange,
    handleSelectionChange,
    handleExecute
  };
}

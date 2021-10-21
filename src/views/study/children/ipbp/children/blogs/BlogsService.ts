import { ColumnProps } from "ant-design-vue/lib/table/interface";
import { createService } from "../../../../../../hooks/soa";
import { useChosen } from "../../../../../../hooks/useChosen";
import { deleteRecords, fetchRecords } from "./Apis";
import { useXhr } from "../../../../../../hooks/useXhr";
import { message } from "ant-design-vue";

function BlogsService() {
  const columns: ColumnProps[] = [
    {
      align: "center",
      title: "#",
      // 自增字段
      customRender: ({ index }) => index++,
    },
    { align: "center", title: "id", dataIndex: "id" },
    { align: "center", title: "userId", dataIndex: "userId" },
    { align: "center", title: "title", dataIndex: "title" },
    { align: "center", title: "description", dataIndex: "description" },
    { align: "center", title: "content", dataIndex: "content" },
    { align: "center", title: "created", dataIndex: "created" },
    { align: "center", title: "status", dataIndex: "status" },
    { align: "center", title: "actions", slots: { customRender: "handler" } },
  ];
  const adapter = async () => (await fetchRecords(null)).data.records;

  const [request, records, loading] = useXhr(adapter, []);

  const { store, stockSize, hasStocks, rowSelection } = useChosen();

  const handleDelete = async (isSelect: boolean, id: number) => {
    let hide;

    try {
      hide = message.loading("正在删除中 。。。");
      const { msg, code } = await deleteRecords(isSelect ? store.value : [id]);
      console.log(msg, code);

      message[code == 200 ? "success" : "error"](msg);
    } catch (e) {
    } finally {
      hide?.();
      // 不太懂？是刷新么
      request();
      // 重置选择状态
      store.value = [];
    }
  };

  return {
    columns,
    request,
    records,
    loading,

    handleDelete,

    stockSize,
    hasStocks,
    rowSelection,
  };
}

export const blogsService = createService(BlogsService);

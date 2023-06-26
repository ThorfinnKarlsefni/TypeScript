import { getList } from '@/services/ant-design-pro/test';
import { PageContainer } from '@ant-design/pro-components';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Card } from 'antd';

const TestList: React.FC = () => {
  const columns: ProColumns[] = [
    { title: 'id', dataIndex: 'id' },
    { title: 'name', dataIndex: 'name' },
    { title: 'sort', dataIndex: 'sort' },
  ];

  return (
    <div>
      <PageContainer>
        <Card>
          <ProTable
            columns={columns}
            request={async (params) => {
              let result = await getList();
              return result;
            }}
          ></ProTable>
        </Card>
      </PageContainer>
    </div>
  );
};

export default TestList;

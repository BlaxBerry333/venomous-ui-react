import { ArgTypes, Canvas, Description, Heading, Markdown, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Chip, IconButton, Space } from "@/components";

import { Table, type TableColumnData } from ".";

const meta = {
  title: "components/Table",
  component: Table.Container,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>表格组件</Subtitle>

          <Markdown>
            {`
用于以表格形式展示结构化数据，包含 \`<Table.Container>\`、\`<Table.Header>\`、\`<Table.Body>\`、\`<Table.Row>\`、\`<Table.Cell>\`。

继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Heading>Usage</Heading>
          <Markdown>{`主要有 2 种实现方式，可根据需求自行组合使用。`}</Markdown>

          <Subtitle>
            <code>方式1. {WithTableContainerExample.name}</code>
          </Subtitle>
          <Description of={WithTableContainerExample} />
          <Canvas
            of={WithTableContainerExample}
            sourceState="hidden"
            source={{
              code: WithTableContainerExample.parameters?.docs?.source?.code,
            }}
          />

          <Subtitle>
            <code>方式2. {WithTableSubComponentsExample.name}</code>
          </Subtitle>
          <Description of={WithTableSubComponentsExample} />
          <Canvas
            of={WithTableSubComponentsExample}
            sourceState="hidden"
            source={{
              code: WithTableSubComponentsExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{CustomCellExample.name}</Heading>
          <Description of={CustomCellExample} />
          <Canvas
            of={CustomCellExample}
            sourceState="hidden"
            source={{
              code: CustomCellExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{SortableColumnsExample.name}</Heading>
          <Description of={SortableColumnsExample} />
          <Canvas
            of={SortableColumnsExample}
            sourceState="hidden"
            source={{
              code: SortableColumnsExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>API</Heading>
          <Subtitle>
            <code>{`<Table.Container>`}</code>
          </Subtitle>
          <ArgTypes of={Table.Container} />

          <Subtitle>
            <code>{`<Table.Head>`}</code>
          </Subtitle>
          <ArgTypes of={Table.Head} />

          <Subtitle>
            <code>{`<Table.Body>`}</code>
          </Subtitle>
          <ArgTypes of={Table.Body} />

          <Subtitle>
            <code>{`<Table.Row>`}</code>
          </Subtitle>
          <ArgTypes of={Table.Row} />

          <Subtitle>
            <code>{`<Table.Cell>`}</code>
          </Subtitle>
          <ArgTypes of={Table.Cell} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================
// 使用方式一
// ============================
export const WithTableContainerExample: Story = {
  name: "<Table.Container>",
  argTypes: {
    bordered: { control: "boolean" },
    columns: { control: false, table: { disable: true } },
    rows: { control: false, table: { disable: true } },
    rowKey: { control: false, table: { disable: true } },
    TableHeadStyle: { control: false, table: { disable: true } },
    TableBodyStyle: { control: false, table: { disable: true } },
    TableHeadRowStyle: { control: false, table: { disable: true } },
    TableBodyRowStyle: { control: false, table: { disable: true } },
    TableHeadCellStyle: { control: false, table: { disable: true } },
    TableBodyCellStyle: { control: false, table: { disable: true } },
  },
  args: {
    bordered: true,
    columns: [],
    rows: [],
  },
  render: function RenderStory(args) {
    interface UserData {
      id: number;
      name: string;
      email: string;
      country: string;
    }

    const columns: TableColumnData<UserData>[] = [
      { key: "id", label: "ID", align: "center" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email", width: 250 },
      { key: "country", label: "Country" },
    ];

    const rows: UserData[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      country: ["Japan", "USA", "Korea", "China"][i % 4],
    }));

    return (
      <Table.Container<UserData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered={args.bordered}
        style={{ width: "100%", maxWidth: "900px", height: "400px" }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "通过 `<Table.Container>` 组件可以快速实现表格展示。<br/>可通过 `style={{ height: '?px', width: '?px' }}` 实现固定范围内的滚动。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Table, type TableColumnData } from "venomous-ui-react/components";

interface UserData {
  id: number;
  name: string;
  email: string;
  country: string;
}

function App() {
  const columns: TableColumnData<UserData>[] = [
    { key: "id", label: "ID", align: "center" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email", width: 250 },
    { key: "country", label: "Country" },
  ];

  const rows: UserData[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: \`User \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    country: ["Japan", "USA", "Korea", "China"][i % 4],
  }));

  return (
    <Theme.Provider>
      <Table.Container<UserData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered
        style={{ width: "100%", maxWidth: "900px", height: "400px" }}
      />
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// 使用方式二
// ============================
export const WithTableSubComponentsExample: Story = {
  name: "<table> + <Table.*>",
  tags: ["!dev"],
  argTypes: {
    ...WithTableContainerExample.argTypes,
    bordered: { control: false, table: { disable: true } },
  },
  args: WithTableContainerExample.args,
  render: function RenderStory() {
    return (
      <div style={{ width: "100%", overflow: "auto", border: "1px solid #ddd" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <Table.Head>
            <Table.Row>
              <Table.Cell as="th" align="center" width={80} bordered>
                ID
              </Table.Cell>
              <Table.Cell as="th" bordered>
                Name
              </Table.Cell>
              <Table.Cell as="th" bordered>
                Email
              </Table.Cell>
              <Table.Cell as="th" align="center" bordered>
                Age
              </Table.Cell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell align="center" bordered>
                1
              </Table.Cell>
              <Table.Cell bordered>Alice</Table.Cell>
              <Table.Cell bordered>alice@example.com</Table.Cell>
              <Table.Cell align="center" bordered>
                28
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell align="center" bordered>
                2
              </Table.Cell>
              <Table.Cell bordered>Bob</Table.Cell>
              <Table.Cell bordered>bob@example.com</Table.Cell>
              <Table.Cell align="center" bordered>
                34
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell align="center" bordered>
                3
              </Table.Cell>
              <Table.Cell bordered>Charlie</Table.Cell>
              <Table.Cell bordered>charlie@example.com</Table.Cell>
              <Table.Cell align="center" bordered>
                25
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </table>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "使用原生 `<table>` + `<Table.Head> + `<Table.Body>` + `<Table.Row>` + `<Table.Cell>` 也可以实现表格布局。<br/>适用于需要精细控制表格结构的场景。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Table } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
        <Table.Head>
          <Table.Row>
            <Table.Cell as="th" align="center" width={80} bordered>ID</Table.Cell>
            <Table.Cell as="th" bordered>Name</Table.Cell>
            <Table.Cell as="th" bordered>Email</Table.Cell>
            <Table.Cell as="th" align="center" bordered>Age</Table.Cell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell align="center" bordered>1</Table.Cell>
            <Table.Cell bordered>Alice</Table.Cell>
            <Table.Cell bordered>alice@example.com</Table.Cell>
            <Table.Cell align="center" bordered>28</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell align="center" bordered>2</Table.Cell>
            <Table.Cell bordered>Bob</Table.Cell>
            <Table.Cell bordered>bob@example.com</Table.Cell>
            <Table.Cell align="center" bordered>34</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell align="center" bordered>3</Table.Cell>
            <Table.Cell bordered>Charlie</Table.Cell>
            <Table.Cell bordered>charlie@example.com</Table.Cell>
            <Table.Cell align="center" bordered>25</Table.Cell>
          </Table.Row>
        </Table.Body>
      </table>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// Custom Cell
// ============================
export const CustomCellExample: Story = {
  name: "Custom Cell",
  tags: ["!dev"],
  argTypes: WithTableContainerExample.argTypes,
  args: WithTableContainerExample.args,
  render: function RenderStory(args) {
    interface ProductData {
      id: number;
      name: string;
      price: number;
      stock: number;
      status: "in_stock" | "low_stock" | "out_of_stock";
    }
    const statusConfig: Record<ProductData["status"], { text: string; color: string }> = {
      in_stock: { text: "In Stock", color: "#4caf50" },
      low_stock: { text: "Low Stock", color: "#ff9800" },
      out_of_stock: { text: "Out of Stock", color: "#f44336" },
    };

    const columns: TableColumnData<ProductData>[] = [
      { key: "id", label: "ID", width: 60, align: "center" },
      { key: "name", label: "Product Name", width: 200 },
      {
        key: "price",
        label: "Price",
        width: 100,
        align: "right",
        renderCell: (row) => `$${row.price.toFixed(2)}`,
      },
      {
        key: "stock",
        label: "Stock",
        width: 80,
        align: "center",
      },
      {
        key: "status",
        label: "Status",
        width: 120,
        align: "center",
        renderCell: (row) => {
          const config = statusConfig[row.status];
          return <Chip text={config.text} color={config.color} />;
        },
      },
      {
        key: "actions",
        label: "Actions",
        width: 150,
        align: "center",
        renderCell: (row) => (
          <Space.Flex spacing={8} style={{ justifyContent: "center" }}>
            <IconButton
              icon="solar:eye-linear"
              variant="outlined"
              onClick={() => alert(JSON.stringify(row, null, 2))}
            />
            <IconButton
              icon="solar:trash-bin-trash-linear"
              variant="outlined"
              color="#f44336"
              onClick={() => alert(JSON.stringify(row, null, 2))}
            />
          </Space.Flex>
        ),
      },
    ];

    const rows: ProductData[] = [
      { id: 1, name: "Laptop Pro 15", price: 1299.99, stock: 45, status: "in_stock" },
      { id: 2, name: "Wireless Mouse", price: 29.99, stock: 8, status: "low_stock" },
      { id: 3, name: "Office Desk", price: 349.99, stock: 0, status: "out_of_stock" },
      { id: 4, name: "Ergonomic Chair", price: 299.99, stock: 15, status: "in_stock" },
      { id: 5, name: "T-Shirt", price: 19.99, stock: 120, status: "in_stock" },
      { id: 6, name: "Programming Book", price: 49.99, stock: 5, status: "low_stock" },
    ];

    return (
      <Table.Container<ProductData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered={args.bordered}
        style={{ width: "100%", maxWidth: "1100px" }}
        TableBodyRowStyle={{ cursor: "pointer" }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
在定义 \`columns\` 时可通过 \`renderCell\` 自定义单元格内容。<br/>
如下：自定义了价格单元格 \`Status\` 与 \`Actions\` 的渲染内容。
`,
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Table, Chip, IconButton, Space } from "venomous-ui-react/components";
import type { TableColumnData } from "venomous-ui-react/components";

interface ProductData {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
}

const statusConfig: Record<ProductData["status"], { text: string; color: string }> = {
  in_stock: { text: "In Stock", color: "#4caf50" },
  low_stock: { text: "Low Stock", color: "#ff9800" },
  out_of_stock: { text: "Out of Stock", color: "#f44336" },
};

function App() {
  const columns: TableColumnData<ProductData>[] = [
    { key: "id", label: "ID", width: 60, align: "center" },
    { key: "name", label: "Product Name", width: 200 },
    { key: "price", label: "Price", width: 100, align: "right", renderCell: (row) => \`$\${row.price.toFixed(2)}\`},
    { key: "stock", label: "Stock", width: 80, align: "center" },
    {
      key: "status",
      label: "Status",
      width: 120,
      align: "center",
      renderCell: (row) => {
        const config = statusConfig[row.status];
        return <Chip text={config.text} color={config.color} />;
      },
    },
    {
      key: "actions",
      label: "Actions",
      width: 150,
      align: "center",
      renderCell: (row) => (
        <Space.Flex spacing={8} style={{ justifyContent: "center" }}>
          <IconButton
            icon="solar:eye-linear"
            variant="outlined"
            onClick={() => alert(JSON.stringify(row, null, 2))}
          />
          <IconButton
            icon="solar:trash-bin-trash-linear"
            variant="outlined"
            color="#f44336"
            onClick={() => alert(JSON.stringify(row, null, 2))}
          />
        </Space.Flex>
      ),
    },
  ];

  const rows: ProductData[] = [
    { id: 1, name: "Laptop Pro 15", price: 1299.99, stock: 45, status: "in_stock" },
    { id: 2, name: "Wireless Mouse", price: 29.99, stock: 8, status: "low_stock" },
    { id: 3, name: "Office Desk", price: 349.99, stock: 0, status: "out_of_stock" },
    { id: 4, name: "Ergonomic Chair", price: 299.99, stock: 15, status: "in_stock" },
    { id: 5, name: "T-Shirt", price: 19.99, stock: 120, status: "in_stock" },
    { id: 6, name: "Programming Book", price: 49.99, stock: 5, status: "low_stock" },
  ];

  return (
    <Theme.Provider>
      <Table<ProductData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered
        style={{ width: "100%", maxWidth: "1100px" }}
        TableBodyRowStyle={{ cursor: "pointer" }}
      />
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// Sortable Columns
// ============================
export const SortableColumnsExample: Story = {
  name: "Sortable Columns",
  tags: ["!dev"],
  argTypes: WithTableContainerExample.argTypes,
  args: WithTableContainerExample.args,
  render: function RenderStory() {
    interface UserData {
      id: number;
      name: string;
      age: number;
      email: string;
      createdAt: string;
    }

    const columns: TableColumnData<UserData>[] = [
      {
        key: "id",
        label: "ID",
        align: "center",
      },
      {
        key: "name",
        label: "Name",
        sortable: true,
      },
      {
        key: "age",
        label: "Age",
        align: "center",
        sortable: true,
      },
      {
        key: "email",
        label: "Email",
        width: 250,
      },
      {
        key: "createdAt",
        label: "Created At",
        sortable: true,
        onSort: (a, b, order) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return order === "asc" ? dateA - dateB : dateB - dateA;
        },
      },
    ];

    const rows: UserData[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: "User" + (i + 1),
      age: Math.floor(Math.random() * 100),
      email: `user${i + 1}@example.com`,
      createdAt: new Date(Date.now() - i * 1000 * 60 * 60 * 24).toLocaleString(),
    }));

    return (
      <Table.Container<UserData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered
        style={{ width: "100%", height: "400px" }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
在定义 \`columns\` 时可通过设置 \`sortable: true\` 实现列支持排序。<br/>
点击表头单元格可以切换升序、降序、取消排序三种状态。
`,
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Table, type TableColumnData } from "venomous-ui-react/components";

interface UserData {
  id: number;
  name: string;
  age: number;
  email: string;
  createdAt: string;
}

function App() {
  const columns: TableColumnData<UserData>[] = [
    { key: "id", label: "ID", align: "center" },
    { key: "name", label: "Name", sortable: true },
    { key: "age", label: "Age", align: "center", sortable: true },
    { key: "email", label: "Email", width: 250 },
    {
      key: "createdAt",
      label: "Created At",
      sortable: true,
      onSort: (a, b, order) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return order === "asc" ? dateA - dateB : dateB - dateA;
      },
    },
  ];

  const rows: UserData[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: "User" + (i + 1),
    age: Math.floor(Math.random() * 100),
    email: \`user\${i + 1}@example.com\`,
    createdAt: new Date(Date.now() - i * 1000 * 60 * 60 * 24).toLocaleString(),
  }));

  return (
    <Theme.Provider>
      <Table.Container<UserData>
        columns={columns}
        rows={rows}
        rowKey="id"
        bordered
        style={{ width: "100%", height: "400px" }}
      />
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

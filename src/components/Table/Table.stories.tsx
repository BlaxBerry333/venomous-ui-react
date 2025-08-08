import type { Meta, StoryObj } from "@storybook/react";
import { Buttons } from "../Button";
import Chip from "../Chip/Chip";
import { Space } from "../Space";
import Table from "./Table";
import type { TableColumnData } from "./index.types";

const meta = {
  title: "components/Table/Table",
  component: Table,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    columns: {
      description: "The columns of the table",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "TableColumn<T>[]" }, defaultValue: { summary: "[]" } },
    },
    rows: {
      description: "The rows of the table",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "T[]" }, defaultValue: { summary: "[]" } },
    },
    rowUnionKey: {
      description: "The union key of the table",
      control: false,
      type: { name: "string", required: true },
      table: {
        type: { summary: "(row: T, rowIndex: number) => string | number" },
        defaultValue: { summary: "(row: T) => row.id" },
      },
    },
    renderRowActions: {
      description: "The render function of the row actions",
      control: false,
      table: { category: "Events", type: { summary: "(row: T, rowIndex: number) => React.ReactNode" } },
    },
    headProps: {
      description: "The props of the table head",
      control: false,
      table: { type: { summary: "React.HTMLAttributes<HTMLTableSectionElement>" } },
    },
    bodyProps: {
      description: "The props of the table body",
      control: false,
      table: { type: { summary: "React.HTMLAttributes<HTMLTableSectionElement>" } },
    },
    headRowProps: {
      description: "The props of the table row",
      control: false,
      table: { type: { summary: "React.HTMLAttributes<HTMLTableRowElement>" } },
    },
    bodyRowProps: {
      description: "The props of the table row",
      control: false,
      table: {
        type: { summary: "React.HTMLAttributes<HTMLTableRowElement>" },
      },
    },
    headRowCellProps: {
      description: "The props of the table cell",
      control: false,
      table: { type: { summary: "React.HTMLAttributes<HTMLTableCellElement>" } },
    },
    bodyRowCellProps: {
      description: "The props of the table cell",
      control: false,
      table: { type: { summary: "React.HTMLAttributes<HTMLTableCellElement>" } },
    },
  },
  args: {
    columns: [],
    rows: [],
    rowUnionKey: (_: unknown, index: number) => index,
    renderRowActions: undefined,
    headProps: {},
    bodyProps: {},
    headRowProps: {},
    bodyRowProps: {},
    headRowCellProps: {},
    bodyRowCellProps: {},
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    type TableRowData = {
      id: number;
      name: string;
      country: string;
    };

    const rows: TableRowData[] = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: "User",
      country: ["Japan", "USA", "Korea"][i % 3],
    }));

    const columns: TableColumnData<TableRowData>[] = [
      {
        key: "id",
        label: "ID",
      },
      {
        key: "name",
        label: "Name",
        renderCell: (row, index) => (
          <strong>
            {row.name}-{index + 1}
          </strong>
        ),
      },
      {
        key: "country",
        label: "Country",
        renderCell: (row) => <Chip text={row.country} />,
      },
    ];

    return (
      <Table<TableRowData>
        {...args}
        columns={columns}
        rows={rows}
        rowUnionKey={(row) => row.id}
        style={{ height: "500px", width: "max-content" }}
        renderRowActions={() => (
          <Space.Flex>
            <Buttons.Icon variant="outlined" icon="solar:pen-linear" />
            <Buttons.Icon variant="outlined" icon="solar:trash-bin-trash-linear" semanticColor="error" />
          </Space.Flex>
        )}
      />
    );
  },
};

import { ReactFragment } from 'react';
import { StyledProps } from '../common';
import {
  TdBaseTableProps,
  TableExpandedRowParams,
  TableRowData,
  TdPrimaryTableProps,
  TdEnhancedTableProps,
  RowspanColspan,
  BaseTableCol,
} from './type';

export interface BaseTableProps extends TdBaseTableProps, StyledProps {
  /**
   * 渲染展开行。非公开属性，请勿在业务中使用
   */
  renderExpandedRow?: (params: TableExpandedRowParams<TableRowData>) => ReactFragment;
  /**
   * 多级表头场景，叶子结点变化时执行。非公开属性，请勿在业务中使用
   */
  onLeafColumnsChange?: (columns: BaseTableColumns) => void;
}

/**
 * SimpleTable is going to be deprecated, use BaseTableProps instead.
 */
export type SimpleTableProps = BaseTableProps;

export interface PrimaryTableProps extends TdPrimaryTableProps, StyledProps {}
export interface EnhancedTableProps extends TdEnhancedTableProps, StyledProps {}
export type TableProps = PrimaryTableProps;

export type ThRowspanAndColspan = Map<any, RowspanColspan>;

export type BaseTableColumns = TdBaseTableProps['columns'];

export interface ColumnStickyLeftAndRight {
  left: number[];
  right: number[];
  top: number[];
  bottom?: number[];
}

export interface TableColFixedClasses {
  left: string;
  right: string;
  lastLeft: string;
  firstRight: string;
  leftShadow: string;
  rightShadow: string;
}

export interface TableRowFixedClasses {
  top: string;
  bottom: string;
  firstBottom: string;
  withoutBorderBottom: string;
}

export interface FixedColumnInfo {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  parent?: FixedColumnInfo;
  children?: string[];
  width?: number;
  height?: number;
  col?: BaseTableCol;
  index?: number;
  lastLeftFixedCol?: boolean;
  firstRightFixedCol?: boolean;
}

// 固定表头和固定列 具体的固定位置（left/top/right/bottom）
export type RowAndColFixedPosition = Map<string | number, FixedColumnInfo>;

// 允许修改列宽时，重新计算各列宽度的函数声明
export interface RecalculateColumnWidthFunc {
  (
    columns: BaseTableCol<TableRowData>[],
    thWidthList: { [colKey: string]: number },
    tableLayout: string,
    tableElmWidth: number,
  ): void;
}

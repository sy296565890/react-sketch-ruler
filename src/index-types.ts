/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PanzoomObject } from 'simple-panzoom'
export  interface PaletteType {
  bgColor?: string;
  longfgColor?: string;
  fontColor?: string;
  shadowColor?: string;
  lineColor?: string;
  lineType?: string;
  lockLineColor?: string;
  borderColor?: string;
  cornerActiveColor?: string;
}

interface ShadowType {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LineType {
  h: number[];
  v: number[];
}

export  interface SketchRulerProps {
  showRuler?: boolean;
  eyeIcon?: string;
  closeEyeIcon?: string;
  scale?: number;
  rate?: number;
  thick?: number;
  palette?: PaletteType;
  width?: number;
  height?: number;
  paddingRatio?: number;
  autoCenter?: boolean;
  shadow?: ShadowType;
  lines?: LineType;
  isShowReferLine?: boolean;
  canvasWidth?: number;
  canvasHeight?: number;
  snapsObj?: LineType;
  snapThreshold?: number;
  gridRatio?: number;
  lockLine?: boolean;
  selfHandle?: boolean;
  panzoomOption?: object; // 需要具体类型，这里假设为object
  children: React.ReactNode;
  onUpdateScale?: (props: any) => void;
  onZoomChange?: (props: any) => void;
  onCornerClick?: (props: any) => void;
  handleShowRuler: Fn
  handleShowReferLine: Fn
}

export interface RulerWrapperProps {
  vertical: boolean
  scale: number
  width: number
  height: number
  start: number
  lines: number[]
  selectStart: number
  selectLength: number
  palette: PaletteType
  isShowReferLine: boolean
  onLineChange: Fn
  onShowRightMenu: Fn
  handleShowReferLine: Fn
}

export interface LineProps {
  index: number
  start: number
  vertical: boolean
  canvasWidth: number,
  canvasHeight: number,
  snapThreshold: number,
  snapsObj: LineType,
  lines: number[],
  palette: PaletteType,
  isShowReferLine: boolean,
  thick: number,
  scale: number
  value: number
  changeLineState: Fn
}

export interface SketchRulerMethods {
  reset: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  initPanzoom: () => void;
  panzoomInstance:PanzoomObject | null
}

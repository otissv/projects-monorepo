import { AliasInterface } from './utility.types'

export function aliases(): {
  readonly alias: AliasInterface
  readonly get: (style: string) => string
} {
  const alias: AliasInterface = {
    cl: 'color',
    d: 'display',

    bg: 'background',
    bga: 'backgroundAttachment',
    bgl: 'backgroundClip',
    bgc: 'backgroundColor',
    bgp: 'backgroundPosition',
    bgr: 'backgroundRepeat',
    bgs: 'backgroundSize',
    bgi: 'backgroundImage',

    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginX',
    my: 'marginY',
    m0: 'margin0',
    m1: 'margin1',
    m2: 'margin2',
    m3: 'margin3',
    m4: 'margin4',
    m5: 'margin5',
    m6: 'margin6',
    m7: 'margin7',
    m8: 'margin8',
    m9: 'margin9',
    m10: 'margin10',

    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingX',
    py: 'paddingY',
    p0: 'padding0',
    p1: 'padding1',
    p2: 'padding2',
    p3: 'padding3',
    p4: 'padding4',
    p5: 'padding5',
    p6: 'padding6',
    p7: 'padding7',
    p8: 'padding8',
    p9: 'padding9',
    p10: 'padding10',

    bd: 'border',
    bdb: 'borderBottom',
    bdl: 'borderLeft',
    bdr: 'borderRight',
    bdt: 'borderTop',
    bdx: 'borderX',
    bdy: 'borderY',
    bdc: 'borderColor',
    bdw: 'borderWidth',
    bds: 'borderStyle',

    r: 'radius',
    rb: 'borderBottomRadius',
    rl: 'borderLeftRadius',
    rr: 'borderRightRadius',
    rt: 'borderTopRadius',
    rx: 'borderXRadius',
    ry: 'borderYRadius',

    e: 'elevate',

    bs: 'boxSizing',

    ct: 'centered',

    fl: 'flex',
    flg: 'flexGrow',
    fls: 'flexShrink',
    fld: 'flexDirection',
    flw: 'flexWrap',
    flb: 'fb',
    od: 'order',

    jc: 'justifyContent',
    ji: 'justifyItems',
    js: 'justifySelf',

    ac: 'alignContent',
    ai: 'alignItems',
    af: 'alignSelf',

    mh: 'maxHeight',
    mw: 'maxWidth',
    wh: 'widthHeight',

    ta: 'textAlign',
    tc: 'truncate',
    wb: 'wordBreak',
    lt: 'listStyle',
    lp: 'listPosition',
    td: 'textDecoration',
    tt: 'textTransform',
    va: 'verticalAlign',
    ws: 'whiteSpace',

    mq: 'mediaQuires',

    of: 'overflow',
    ox: 'overflowX',
    oy: 'overflowY',
    os: 'overFlowScrolling',
    ow: 'overflowWrap',

    ps: 'position',

    ft: 'float',
    cf: 'clear',

    ff: 'fontFamily',
    fs: 'fontSize',
    lh: 'lineHeight',
    ls: 'letterSpacing',
    fw: 'fontWeight',

    zi: 'zIndex',

    ot: 'objectFit',
    op: 'objectPosition',

    vs: 'visibility',

    cr: 'cursor',
    ap: 'appearance',
    pe: 'pointerEvents',
    rs: 'resize',
    us: 'userSelect',

    tr: 'transition',

    tf: 'transform',

    fr: 'filter',
    frr: 'filterBlur',
    frb: 'filterBrightness',
    frc: 'filterContrast',
    frd: 'filterDropShadow',
    frg: 'filterGrayscale',
    frf: 'filterGrayscale',
    frh: 'filterHueRotate',
    fro: 'filterOpacity',
    fsr: 'filterSaturate',
    frp: 'filterSepia',

    op0: 'opacity0',
    op25: 'opacity25',
    op50: 'opacity50',
    op75: 'opacity75',
    op100: 'opacity100',

    tbc: 'borderCollapse',
  }

  return {
    alias,
    get: (style: string): string => {
      return alias[style] || style
    },
  }
}

export function getAlias(style: string): string {
  return aliases().get(style)
}

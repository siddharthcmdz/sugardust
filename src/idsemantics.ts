
export class SpatialID {
    constructor(public readonly id : number) {}
}

export class GeometryFormatID {
    constructor(public readonly id : number) {}
}

export class GeometryDataID {
    constructor(public readonly id : number) {}
}

export class GeometryID {
    constructor(public readonly id : number) {}
}

export class CollectionID {
    constructor(public readonly id : number) {}
}

export class TextureID {
    constructor(public readonly id : number) {}
}

export class ShaderID {
    constructor(public readonly id : number) {}
}

export class InstanceID {
    constructor(public readonly id : number) {}
}

export class ViewID {
    constructor(public readonly id : number) {}
}

const INVALID_ID = 1
export default INVALID_ID
export enum VertexAttribute {
    gaPosition = 0,
    gaNormal = 1,
    gaColor = 2,
    gaTexCoords = 3,
    gaTangent = 4
}

export enum PrimitiveMode {
    pmArray = 0,
    pmIndices = 1,
    pmInvalid = 2
}

export enum PrimitiveType {
    ptLine = 0,
    ptLineStrip = 1,
    ptLineLoop = 2,
    ptTriangle = 3,
    ptTriangleStrip = 4,
    ptInvalid = 5
}

export enum TextureType {
    tt2D,
    ttCubemap,
    ttInvalid
}

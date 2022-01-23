import { SpatialID, sugardustI } from "./sugardustI";

class sugardust implements sugardustI {
    constructor() {}

    spatialCreate() : SpatialID {
        return new SpatialID(-1)
    }

    spatialSetData(spatialID: SpatialID, spatial : Spatial) : boolean {

    }

    spatialGetData(spatialID : SpatialID) : Spatial {

    }

    spatialDispose(spatialID: SpatialID) : boolean {

    }

    geometryFormatCreate(geomFormat : GeometryFormat) : GeometryFormatID {

    }

    geometryFormatGetData(geomFormatID : GeometryFormatID) : GeometryFormat {

    }

    geometryFormatDispose(geomFormatID : GeometryFormatID) : boolean {

    }

    geometryDataCreate(geomFormat : GeometryFormatID, geomData : GeometryData) : GeometryDataID {

    }

    geometryDataUpdate(geomDataID: GeometryDataID, vertexAttrib: VertexAttribute, data : Float32Array) : boolean {

    }

    geometryDataUpdateIndices(geomDataID: GeometryDataID, data : Uint32Array) : boolean {

    }

    geometryDataDispose(geomDataID : GeometryDataID) : boolean {

    }

    geometryCreate(geomDataID : GeometryDataID, geomInfo : GeometryInfo) : GeometryID {

    }

    geometryGetData() : GeometryInfo {

    }

    geometryDispose(geomID : GeometryID) : boolean {

    }

    textureCreate(path: string) : TextureID {

    }

    textureGetData(texID: TextureID) : TextureInfo  {

    }

    textureDispose(texID: TextureID) : boolean {

    }

    shaderCreate(shaderInfo : ShaderInfo) : ShaderID {

    }

    shaderGetData(shaderID : ShaderID) : ShaderInfo {

    }

    shaderDispose(shaderID : ShaderID) : boolean {

    }

    collectionCreate(colinfo : CollectionInfo) : CollectionID {

    }

    collectionGetData() : CollectionInfo {

    }

    collectionDispose(colID : CollectionID) : boolean {

    }

    collectionInstanceCreate(inst : CollectionInstanceInfo) : InstanceID {

    }

    collectionInstanceDispose(instID : InstanceID) : boolean {

    }

}
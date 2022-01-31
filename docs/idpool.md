
An ID pool is essentially a container or a pool of IDs. An ID is a unique number. This is the foundation for a very simple memory allocation scheme. If you're an OpenGL\Vulkan developer, the idea is similar to glgen*\glCreate*\vkCreate* methods. The ID pool should have the following APIs:

* createID() : number
    This API should always return an available ID that is unique and the smallest value. If an ID previously disposed is the smallest ID, then the same ID should be returned. This way the ID is being re-used.

* disposeID(id : number) : boolean
    This API disposes an ID which may be reclaimed by a successive call to createID().

* createRange(numofids : number) : number
    This API allocates a range of IDs starting from the smallest available slot. One can dispose an ID using disposeID(id) within this range of IDs. This API returns the offset number.

* disposeRange(id : offset, nums : number) : boolean
    This API disposes a range of IDs and is also reasonable to dispose one by one IDs in a range. 
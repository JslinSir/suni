<template>
	<si-avatar src="/avatars/three.webp" badge> </si-avatar>
	<si-avatar src="/avatars/three.webp" badge badge-type="danger"> </si-avatar>
	<si-avatar src="/avatars/three.webp" badge badge-type="success" badge-position="bottom-right">
		<img src="/avatars/three.webp" />
		<template #badge> 28 </template>
	</si-avatar>
	<si-avatar src="/avatars/three.webp" badge badge-type="warning" badge-position="bottom-left">
		<img src="/avatars/three.webp" />
		<template #badge>
			<i class="bx bxs-bell-off"></i>
		</template>
	</si-avatar>
	<si-avatar src="/avatars/three.webp" badge badge-type="danger" badge-position="top-left">
		<template #badge> Off </template>
	</si-avatar>
	<si-avatar src="/avatars/three.webp" badge badge-color="#7d33ff"> </si-avatar>
</template>

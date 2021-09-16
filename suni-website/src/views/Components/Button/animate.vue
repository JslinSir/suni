<template>
	<si-button type="warning">
		Animate
		<template #animate><i class="bx bx-home-alt"></i></template>
	</si-button>

	<si-button icon type="danger" variant="border" animation-type="scale">
		Love
		<template #animate><i class="bx bxs-heart"></i></template>
	</si-button>

	<si-button icon variant="relief" type="danger" animation-type="rotate">
		<i class="bx bx-like"></i>
		<template #animate>
			<i class="bx bxs-like"></i>
		</template>
	</si-button>
</template>

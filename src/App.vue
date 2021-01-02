<template>
	<div>
		<p>Before: {{ before }}</p>
		<HelloWorld />
		<p>After: {{ after }}</p>
	</div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

export default {
	components: {
		HelloWorld,
	},

	data() {
		return {
			before: "abc",
			after: "def",
		};
	},
};
</script>

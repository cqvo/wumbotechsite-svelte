<script lang="ts">
	interface ResumeEntry {
		title: string;
		organization: string;
		location: string;
		type: string;
		subtype?: string;
		text?: string;
		items?: string[];
		start_date: string;
		end_date?: string;
	}

	interface ResumeData {
		entries: ResumeEntry[];
	}

	let { resumeData }: { resumeData: ResumeData } = $props();
	
	let groupedEntries = $derived.by(() => {
		return Object.entries(
			resumeData.entries.reduce((acc: Record<string, ResumeEntry[]>, entry: ResumeEntry) => {
				if (!acc[entry.type]) {
					acc[entry.type] = [];
				}
				acc[entry.type].push(entry);
				return acc;
			}, {})
		).map(([type, entries]) => ({ type, entries: entries as ResumeEntry[] }));
	});

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long' 
		});
	}
</script>

<article class="mx-auto max-w-4xl space-y-8 p-6">
	{#each groupedEntries as { type, entries } (type)}
		<section class="space-y-6">
			<h2 class="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
				{type}
			</h2>
			<div class="space-y-4">
				{#each entries as entry (entry.title)}
					<div class="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
						<div class="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
							<div class="flex-1">
								<h3 class="text-xl font-semibold text-gray-900 mb-1">
									{entry.title}
								</h3>
								<div class="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-3">
									<span class="font-medium text-blue-600">
										{entry.organization}
									</span>
									<span class="hidden sm:inline text-gray-400">•</span>
									<span class="text-sm">
										{entry.location}
									</span>
								</div>
								{#if entry.text}
									<p class="text-gray-700 leading-relaxed">
										{entry.text}
									</p>
								{/if}
								{#if entry.items && entry.items.length > 0}
									<ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mt-2">
										{#each entry.items as item}
											<li>{item}</li>
										{/each}
									</ul>
								{/if}
							</div>
							<div class="text-sm text-gray-500 font-medium md:text-right">
								{formatDate(entry.start_date)} - {entry.end_date ? formatDate(entry.end_date) : 'Present'}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</article>
<script lang="ts">
    import SvelteTable from "svelte-table";
    import { bookColumns}  from "$data/books";
    import { bookRows } from "$data/books";
    // import { books } from "$data/books.json";
</script>

<h1>Books</h1>

<section class="flex">
    <div class="w-1/2">
        <SvelteTable 
            columns={bookColumns} 
            rows={bookRows}
            selectOnClick
            classNameRowSelected = "tableSelectedRow"
        >
        </SvelteTable>
    </div>
    <div class="w-1/2">
        Select a book to display more information.
    </div>
</section>

<style>
.tableSelectedRow {
    background-color: aquamarine;
}
</style>

<!-- <table>
    <thead>
        <tr class="bg-cyan-200">
            <th class="w-40 text-left">Author</th>
            <th class="w-60 text-left">Title</th>
            <th class="w-40 text-left">Published</th>
        </tr>
    </thead>
    <tbody>
        {#each books as book}
            <tr>
                <td>
                    {book.author}
                </td>
                <td>
                    {book.title}
                </td>
                <td>
                    {book.published}
                </td>
            </tr>
        {/each}
    </tbody>
</table> -->

export const bookRows = [
    {
        "id"        : 1,
        "author"    : "Dan Brown",
        "title"     : "The Da Vinci Code",
        "published" : "March 2003",
        "pages"     : 489,
        "type"      : "paperback"
    },
    {
        "id"        : 2,
        "author"    : "Ken Follett",
        "title"     : "A World Without End",
        "published" : "October 2007",
        "pages"     : 1024,
        "type"      : "paperback"
    },
    {
        "id"        : 3,
        "author"    : "Dean Koontz",
        "title"     : "Icebound",
        "published" : "June 1995",
        "pages"     : 408,
        "type"      : "paperback"
    },
    {
        "id"        : 4,
        "author"    : "Ken Follett",
        "title"     : "Never",
        "published" : "November 2021",
        "pages"     : 832,
        "type"      : "hardcover"
    }
]

export const bookColumns = [
    {
        key: "id",
        title: "ID",
        value: v => v.id,
        sortable: true,
        headerClass: "text-left"
    },
    {
        key: "author",
        title: "AUTHOR",
        value: v => v.author,
        sortable: true,
        headerClass: "text-left"
    },
    {
        key: "title",
        title: "TITLE",
        value: v => v.title,
        sortable: true,
        headerClass: "text-left"
    },
    {
        key: "published",
        title: "PUBLISHED",
        value: v => v.published,
        sortable: true,
        headerClass: "text-left"
    },
    {
        key: "pages",
        title: "PAGES",
        value: v => v.pages,
        sortable: true,
        headerClass: "text-left"
    },
    {
        key: "type",
        title: "TYPE",
        value: v => v.type,
        sortable: true,
        headerClass: "text-left"
    }
]
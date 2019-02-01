# Newscraper-api backend

Exposes newscraper as an API that can be called

    db.items.find(

        {
    $and:
    [
        {
            $text: {$search: "Bla Bla"}
        },
        {
            plainText: /.*/

        }
    ]
    }

        )
        .projection({})
        .sort({ _id: -1 })
        .limit(1000)

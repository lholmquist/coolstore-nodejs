db.createUser(
        {
            user: "root",
            pwd: "example",
            roles: [
                {
                    role: "readWrite",
                    db: "Inventory"
                },
                {
                    role: "readWrite",
                    db: "Catalog"
                }
            ]
        }
);
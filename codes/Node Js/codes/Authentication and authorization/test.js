const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync('12345', salt);

// console.log('hash is ', hash , 'salt is ', salt)

async function comparison() {
    const comparison = await bcrypt.compare('12345', '$2b$10$q47DHSXgvcmCC.7vHLTmOuyxp8bThq0wg4uyMfvm2PBQbuT86pwCG')
    console.log(comparison)
    return comparison
}

comparison()
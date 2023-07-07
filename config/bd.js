const oracledb = require('oracledb');

/* (async function() {
  try {
    const bd = await oracledb.getConnection({
      user: 'NODE_SERVICES_PA',
      password: 'NODE_SERVICES_PA2023',
      connectString: `
      (DESCRIPTION =
        (ADDRESS = (PROTOCOL = TCP)(HOST = 129.146.29.128)(PORT = 1521))
        (CONNECT_DATA =
          (SERVER = DEDICATED)
          (SERVICE_NAME = pdbdev1.cvcpigasubnet.cvcpigavcn.oraclevcn.com)
        )
      )`
    });

    module.exports = { bd };
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})(); */
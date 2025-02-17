const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
  ('Mao'),
  ('Clinton'),
  ('Gorbachev');
`;

async function main() {
  console.log('seeding...');
  try {
    const client = new Client({
      connectionString: 'postgresql://julianso:1234@127.0.0.1:5432/top_users',
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done seeding');
  } catch (error) {
    console.error('error seeding:', error);
  }
}

main();

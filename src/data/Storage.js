import fs from 'fs';

export const Storage = {
  data: fs.existsSync('storage.json')
    ? JSON.parse(fs.readFileSync('storge.json', 'utf8'))
    : JSON.parse(
        fs.readFileSync(
          fs.appendFileSync('storage.json', '{ links: []}'),
          'utf8'
        )
      ),
  write: () =>
    fs.existsSync('storage.json')
      ? fs.writeFileSync('storage.json', JSON.stringify(Storage.data, null, 2))
      : fs.appendFileSync(
          'storage.json',
          JSON.stringify(Storage.data, null, 2)
        ),
};
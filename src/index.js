let streams = []

export default function ui(opts) {
  for (const conn of streams) {
    conn.end()
  }
  streams = []

  return [
    '/ui/::path', file(req => join(__dirname, '../webapp', req.params.path)),
    '/api/', [
      'write', (req, res) => {

      },
      'read', (req, res) => {

      },
      'poll', (req, res) => {
        const stream = new PassThrough
        res.body = stream
        streams.push(stream)
      },
    ],
  ]
}

ui.group = function(group) {
  // body...
}

ui.select = function(opts) {
  // body...
}

/**
// row - col - row - col - ...
ui([[
  ui.group([
    'a',
    'b',
    ui.select('other', [
      'c',
      'd',
    ]),
  ]),
  2, [
    'e',
  ],
]])
 */

export default function() {
// These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
/* greg figure the below bit out...
  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
        enabled: true
    }
  }
  */

    this.namespace = '/api';

    this.get('/dicerolls', (schema, request) => {
        return schema.dicerolls.all();
    });

    this.get('/tables', (schema, request) => {
        return schema.tables.all();
    });

    this.get('/collections', (schema, request) => {
        return schema.collections.all();
    });

    this.get('/tables/:id');
    this.get('/table-items/:id');
    this.get('/dicerolls/:id');
    this.get('/encounters/:id');

/*
    this.get('/tables', function() {
        return {
            data: [{
                type: 'table',
                id: 1,
                attributes: {
                    title: 'Table 1 data',
                    diceroll: [{id:2, type:'diceroll'}],
                }
            },
            {
                type: 'table',
                id: 2,
                attributes: {
                    title: 'Table 2 data',
                    diceroll: [{id:1, type:'diceroll'}],
                }
            },
            ]
        }
    });

    this.get('/dicerolls', function() {
        return {
            data: [{
                type: 'diceroll',
                id: 1,
                attributes: {
                    count: 1,
                    type: 6,
                }
            },
            {
                type: 'diceroll',
                id: 2,
                attributes: {
                    count: 2,
                    type: 6
                }
            },
            {
                type: 'diceroll',
                id: 3,
                attributes: {
                    count: 3,
                    type: 6
                }
            },
            ]
        }
    });
    */
}

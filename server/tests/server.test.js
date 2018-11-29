const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach(done => {
  Todo.deleteMany({}).then(() => done())
})

describe('POST /todos', () => {
  it('CRIAR UMA NOVA TAREFA TODO', (done) => {
    var text = 'Teste para verificar a criação de nova tarefa';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then(todos => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch(err => done(err))
      })
  });

  it('NÃO CRIAR TAREFA COM DADO INVALIDO', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then(todos => {
          expect(todos.length).toBe(0);
          done();
        }).catch(err => done(err));
      })
  });
});
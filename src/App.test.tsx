import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoApp from './ToDoApp';
import userEvent from '@testing-library/user-event';

describe("ToDoApp",()=>{
  it('render ToDo component',() => {
    render(<ToDoApp />);
    expect(screen.getByText('Тестовое задание для Mindbox')).toBeInTheDocument();
    expect(screen.getByLabelText('Показать только завершенные')).toBeInTheDocument();
    expect(screen.getByLabelText('Показать только незавершенные')).toBeInTheDocument();
    expect(screen.getByLabelText('Добавить задачу')).toBeInTheDocument();
  })

  it('enter data into input field',() => {
    render(<ToDoApp />);
    userEvent.type(screen.getByLabelText("Добавить задачу"), "qwerty{enter}");
    userEvent.type(screen.getByLabelText("Добавить задачу"), "abc{enter}");
    expect(screen.getByText('qwerty')).toBeInTheDocument();
    expect(screen.getByText('abc')).toBeInTheDocument();
  })
  it('show correct amount in list after clicked on \'Показать только незавершенные\'',() => {
    render(<ToDoApp />);
    userEvent.type(screen.getByLabelText("Добавить задачу"), "qwerty{enter}");
    userEvent.click(screen.getByLabelText("Показать только незавершенные"));
    expect(screen.getByText('qwerty')).toBeInTheDocument();
  })
  it('show correct amount in list after clicked on \'Показать только завершенные\'',() => {
    render(<ToDoApp />);
    userEvent.type(screen.getByLabelText("Добавить задачу"), "qwerty{enter}");
    userEvent.click(screen.getByLabelText("Показать только завершенные"));
    expect(screen.queryByText('qwerty')).not.toBeInTheDocument();
  })
});

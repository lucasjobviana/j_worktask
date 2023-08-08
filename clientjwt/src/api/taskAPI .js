const addTaskAPI = async (work) => {
  const token = 'tokenaleatorio';
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(work),

    };

    const response = await fetch('http://172.20.0.11:3000/tasks', requestOptions);
    if (!response.ok) {
      throw new Error('Erro ao salvar os dados de task na API.');
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('Erro no front ao salvar a task:', error);
    console.log(error);
    return null;
  }
};

const editTaskAPI = async (work) => {
  const token = 'tokenaleatorio';
  console.log(work);
  try {
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(work),
    };

    const response = await fetch('http://172.20.0.11:3000/tasks', requestOptions);
    if (!response.ok) {
      throw new Error('Erro ao editar os dados de task na API.');
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('Erro no front ao editar a task:', error);
    console.log(error);
    return null;
  }
};

const rmvTaskAPI = async (id) => {
  const token = 'tokenaleatorio';
  console.log(id);
  try {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    };

    const response = await fetch('http://172.20.0.11:3000/tasks', requestOptions);
    if (!response.ok) {
      throw new Error('Erro ao EXCLUIR os dados de task na API.');
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('Erro no front ao EXCLUIR a task:', error);
    console.log(error);
    return null;
  }
};

const getTasksAPI = async () => { // (userId)
  const token = 'tokenaleatorio';
  try {
    // const user = { id: 1 };
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('http://172.20.0.11:3000/tasks', requestOptions);
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API.');
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('Erro durante a requisição:', error);
    console.log(error);
    return null;
  }
};

export {
  addTaskAPI, editTaskAPI, rmvTaskAPI, getTasksAPI,
};

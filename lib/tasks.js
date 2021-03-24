import fetch from "node-fetch";

export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  const filteredTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return filteredTasks;
}

export async function getAllTaskIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  return tasks.map((tasks) => {
    return {
      params: {
        id: String(tasks.id),
      },
    };
  });
}

// 指定されたIDに基づいて特定のタスクを取得する
export async function getTaskData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`)
  );
  const task = await res.json();
  return task;
}

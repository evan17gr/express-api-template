export async function get(_req: any, res: { json: (arg0: string) => void }, next: (arg0: unknown) => void) {
  try {
    res.json('Hello');
  } catch (err: any) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

export async function create(_req: any, res: { json: (arg0: string) => void }, next: (arg0: unknown) => void) {
  try {
    res.json('hello');
  } catch (err: any) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

export async function update(_req: any, res: { json: (arg0: string) => void }, next: (arg0: unknown) => void) {
  try {
    res.json('Hello');
  } catch (err: any) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

export async function remove(_req: any, res: { json: (arg0: string) => void }, next: (arg0: unknown) => void) {
  try {
    res.json('Hello');
  } catch (err: any) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

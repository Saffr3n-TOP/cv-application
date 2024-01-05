export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type EditMode = {
  contact: boolean;
};
export type SetEditMode = SetState<EditMode>;

export type Data = {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
};
export type SetData = SetState<Data>;

export type GlobalProps = {
  setEditMode: SetEditMode;
  setData?: SetData;
};

export type ContactProps = GlobalProps & {
  data: Data['contact'];
};

export type ReactNode = React.ReactNode;

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type FormEventHandler = React.FormEventHandler<HTMLFormElement>;

export type MouseEvent = React.MouseEvent<Element>;
export type MouseEventHandler = React.MouseEventHandler<Element>;

export type InputTypeAttribute = React.HTMLInputTypeAttribute;
export type ButtonTypeAttribute = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];

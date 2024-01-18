export type Option = {
  label: string;
  value: any;
  color?: string;
};

class EnumOption {
  #label: Option['label'];
  #value: Option['value'];
  #color?: Option['color'];

  constructor(label: Option['label'], value: Option['value'], color?: Option['color']) {
    this.#label = label;
    this.#value = value;
    this.#color = color;
  }

  get label(): Option['label'] {
    return this.#label;
  }

  get value(): Option['value'] {
    return this.#value;
  }

  get color(): Option['color'] {
    return this.#color;
  }

  static get options() {
    return Object.entries(this)
      .filter(([key, value]) => value instanceof this)
      .map(([key, { label, value, color }]) => ({ label, value, color }));
  }

  static getOption(value: any) {
    return this.options.find((option) => option.value === value);
  }
}

export class TaskStatus extends EnumOption {
  static readonly TODO = new this('A fazer', 'A_FAZER');
  static readonly IN_PROGRESS = new this('Em progresso', 'EM_PROGRESSO');
  static readonly DONE = new this('Feita', 'FEITA');
}

export class TaskPriority extends EnumOption {
  static readonly LOW = new this('Baixa', 'BAIXA', '#3589EB');
  static readonly MEDIUM = new this('Média', 'MEDIA', '#EBB835');
  static readonly HIGH = new this('Alta', 'ALTA', '#EB3535');
}

interface ValueObject {
  id?: string;
  editable?: boolean;
  name: string;
}

interface DomainObject {
  isRoot: boolean;
  isEntity: boolean;
  name: string;
  valueObjects: ValueObject[];
}

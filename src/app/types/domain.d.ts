interface ValueObject {
  name: string;
}

interface DomainObject {
  isRoot: boolean;
  isEntity: boolean;
  name: string;
  valueObjects: ValueObject[];
}

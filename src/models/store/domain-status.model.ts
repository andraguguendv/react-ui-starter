import { RequestStatus } from './request-status.model';

export interface DomainStatus<T> {
  domain: T;
  requestStatus: RequestStatus;
}

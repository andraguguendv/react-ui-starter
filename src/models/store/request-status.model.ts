import { StoreReqStatus } from './status.model';

export interface RequestStatus {
  status: StoreReqStatus;
  errorNotification: any;
}

export const initialRequestStatus: RequestStatus = {
  status: StoreReqStatus.NEW,
  errorNotification: undefined,
};

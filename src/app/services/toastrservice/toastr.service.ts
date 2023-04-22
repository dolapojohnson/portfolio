import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
     providedIn: 'root'
})

export class ToasterService {

     constructor(private toastr: ToastrService) {}

     showInfo( message: any) {
          this.toastr.info(message, "Info")
     }

     showError( message: any) {
          this.toastr.error(message, "Error")
     }

     showWarning( message: any) {
          this.toastr.warning(message, "Warning")
     }

     showSuccess( message: any) {
          this.toastr.success(message, "Success")
     }
}
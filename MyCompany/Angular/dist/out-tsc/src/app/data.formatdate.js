import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
var FormatLocalDate = /** @class */ (function (_super) {
    tslib_1.__extends(FormatLocalDate, _super);
    function FormatLocalDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatLocalDate.prototype.transform = function (value, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.call(this, value, "dd/MMM/yyyy");
    };
    FormatLocalDate = tslib_1.__decorate([
        Pipe({
            name: 'dateFormat'
        })
    ], FormatLocalDate);
    return FormatLocalDate;
}(DatePipe));
export { FormatLocalDate };
//# sourceMappingURL=data.formatdate.js.map
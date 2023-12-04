/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const features_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(27);
const app_service_1 = __webpack_require__(28);
const mongoose_1 = __webpack_require__(24);
const features_2 = __webpack_require__(5);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [features_1.MealModule, features_2.backendendFeaturesModule, mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/avans-nx-workshop')],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_controller_1 = __webpack_require__(7);
const meal_service_1 = __webpack_require__(8);
let MealModule = exports.MealModule = class MealModule {
};
exports.MealModule = MealModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [meal_controller_1.MealController],
        providers: [meal_service_1.MealService],
        exports: [meal_service_1.MealService],
    })
], MealModule);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_service_1 = __webpack_require__(8);
const common_2 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
const dto_1 = __webpack_require__(15);
let MealController = exports.MealController = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getAll() {
        return this.mealService.getAll();
    }
    getOne(id) {
        return this.mealService.getOne(id);
    }
    create(data) {
        return this.mealService.create(data);
    }
};
tslib_1.__decorate([
    (0, common_2.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], MealController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_2.Get)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof api_1.IMeal !== "undefined" && api_1.IMeal) === "function" ? _b : Object)
], MealController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, common_2.Post)(''),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateMealDto !== "undefined" && dto_1.CreateMealDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof api_1.IMeal !== "undefined" && api_1.IMeal) === "function" ? _d : Object)
], MealController.prototype, "create", null);
exports.MealController = MealController = tslib_1.__decorate([
    (0, common_1.Controller)('meal'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof meal_service_1.MealService !== "undefined" && meal_service_1.MealService) === "function" ? _a : Object])
], MealController);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(9);
const common_2 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
let MealService = exports.MealService = class MealService {
    constructor() {
        this.TAG = 'MealService';
        this.meals$ = new rxjs_1.BehaviorSubject([
            {
                id: '0',
                title: 'Spaghetti con funghi',
                description: 'Vega version of the famous spaghetti recipe.',
                isVega: true,
                sort: api_1.MealSort.Breakfast,
                cook: "quinn",
                dateServed: new Date(),
            },
        ]);
    }
    getAll() {
        common_2.Logger.log('getAll', this.TAG);
        return this.meals$.value;
    }
    getOne(id) {
        common_2.Logger.log(`getOne(${id})`, this.TAG);
        const meal = this.meals$.value.find((td) => td.id === id);
        if (!meal) {
            throw new common_1.NotFoundException(`Meal could not be found!`);
        }
        return meal;
    }
    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(meal) {
        common_2.Logger.log('create', this.TAG);
        const current = this.meals$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newMeal = {
            ...meal,
            id: `meal-${Math.floor(Math.random() * 10000)}`,
            isVega: false,
            sort: api_1.MealSort.Breakfast,
            cook: "quinn",
            dateServed: new Date(),
        };
        this.meals$.next([...current, newMeal]);
        return newMeal;
    }
};
exports.MealService = MealService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MealService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealSort = void 0;
var MealSort;
(function (MealSort) {
    MealSort["Breakfast"] = "Breakfast";
    MealSort["Lunch"] = "Lunch";
    MealSort["Dinner"] = "Dinner";
    MealSort["Other"] = "Other";
})(MealSort || (exports.MealSort = MealSort = {}));


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGender = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "Admin";
    UserRole["editor"] = "Editor";
    UserRole["guest"] = "Guest";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserGender;
(function (UserGender) {
    UserGender["male"] = "Male";
    UserGender["female"] = "Female";
    UserGender["other"] = "Other";
})(UserGender || (exports.UserGender = UserGender = {}));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["active"] = "Active";
    TicketStatus["inactive"] = "Inactive";
    TicketStatus["pending"] = "Pending";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DtoModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let DtoModule = exports.DtoModule = class DtoModule {
};
exports.DtoModule = DtoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], DtoModule);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMealDto = exports.UpsertMealDto = exports.CreateMealDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(18);
const api_1 = __webpack_require__(10);
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
class CreateMealDto {
}
exports.CreateMealDto = CreateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _a : Object)
], CreateMealDto.prototype, "sort", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "cook", void 0);
class UpsertMealDto {
}
exports.UpsertMealDto = UpsertMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Boolean)
], UpsertMealDto.prototype, "isVega", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpsertMealDto.prototype, "dateServed", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _c : Object)
], UpsertMealDto.prototype, "sort", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "cook", void 0);
class UpdateMealDto {
}
exports.UpdateMealDto = UpdateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateMealDto.prototype, "completed", void 0);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseInterceptor = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(20);
let ApiResponseInterceptor = exports.ApiResponseInterceptor = class ApiResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((results) => {
            if (results) {
                return {
                    results,
                    info: {
                        version: '1.0',
                        type: results instanceof Array ? 'list' : 'object',
                        count: results instanceof Array ? results.length : 1,
                    },
                };
            }
            else {
                return {
                    results: undefined,
                    info: {
                        version: '1.0',
                        type: 'none',
                        count: 0,
                    },
                };
            }
        }));
    }
};
exports.ApiResponseInterceptor = ApiResponseInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ApiResponseInterceptor);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backendendFeaturesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const ticket_controller_1 = __webpack_require__(22);
const ticket_service_1 = __webpack_require__(23);
const ticket_schema_1 = __webpack_require__(26); // Corrected import
const mongoose_1 = __webpack_require__(24);
let backendendFeaturesModule = exports.backendendFeaturesModule = class backendendFeaturesModule {
};
exports.backendendFeaturesModule = backendendFeaturesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Ticket', schema: ticket_schema_1.TicketSchema }])],
        controllers: [ticket_controller_1.TicketController],
        providers: [ticket_service_1.TicketService],
        exports: [ticket_service_1.TicketService],
    })
], backendendFeaturesModule);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketController = void 0;
const tslib_1 = __webpack_require__(4);
const ticket_service_1 = __webpack_require__(23);
const api_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
let TicketController = exports.TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    getTickets() {
        return this.ticketService.getTickets();
    }
    getTicketById(id) {
        return this.ticketService.getTicketById(id);
    }
    addTicket(ticketData) {
        return this.ticketService.addTicket(ticketData);
    }
    deleteTicket(id) {
        return this.ticketService.deleteTicket(id);
    }
    updateTicket(id, updatedTicketData) {
        return this.ticketService.updateTicket(id, updatedTicketData);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TicketController.prototype, "getTickets", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TicketController.prototype, "getTicketById", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof api_1.ITicket !== "undefined" && api_1.ITicket) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TicketController.prototype, "addTicket", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TicketController.prototype, "deleteTicket", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TicketController.prototype, "updateTicket", null);
exports.TicketController = TicketController = tslib_1.__decorate([
    (0, common_1.Controller)('ticket'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ticket_service_1.TicketService !== "undefined" && ticket_service_1.TicketService) === "function" ? _a : Object])
], TicketController);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(24);
const mongoose_2 = __webpack_require__(25);
const ticket_schema_1 = __webpack_require__(26); // Import the correct types
let TicketService = exports.TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async getTickets() {
        console.log('getTickets aangeroepen in service backend');
        return this.ticketModel.find().exec();
    }
    async getTicketById(id) {
        console.log(`getTicketById invoked with id: ${id}`);
        return this.ticketModel.findById(id).exec();
    }
    async addTicket(ticketData) {
        const createdTicket = new this.ticketModel(ticketData);
        return createdTicket.save();
    }
    async deleteTicket(id) {
        await this.ticketModel.findByIdAndDelete(id).exec();
    }
    async updateTicket(id, updatedTicketData) {
        // Find the ticket by ID and update its data
        const updatedTicket = await this.ticketModel.findByIdAndUpdate(id, { $set: updatedTicketData }, { new: true } // Return the updated document
        ).exec();
        return updatedTicket;
    }
};
exports.TicketService = TicketService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(ticket_schema_1.Ticket.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TicketService);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketSchema = exports.Ticket = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(24);
const mongoose_2 = __webpack_require__(25);
const api_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(18);
let Ticket = exports.Ticket = class Ticket {
};
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "title", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number
    }),
    tslib_1.__metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Ticket.prototype, "date", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: api_1.TicketStatus.pending
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof api_1.TicketStatus !== "undefined" && api_1.TicketStatus) === "function" ? _b : Object)
], Ticket.prototype, "status", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number
    }),
    tslib_1.__metadata("design:type", Number)
], Ticket.prototype, "seat", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.User !== "undefined" && api_1.User) === "function" ? _c : Object)
], Ticket.prototype, "owner", void 0);
exports.Ticket = Ticket = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(28);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(15);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const corsOptions = {};
    app.enableCors(corsOptions);
    app.useGlobalInterceptors(new dto_1.ApiResponseInterceptor());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application: data-api is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map
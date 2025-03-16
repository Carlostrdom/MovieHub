"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieViewDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_movie_view_dto_1 = require("./create-movie-view.dto");
class UpdateMovieViewDto extends (0, mapped_types_1.PartialType)(create_movie_view_dto_1.CreateMovieViewDto) {
}
exports.UpdateMovieViewDto = UpdateMovieViewDto;
//# sourceMappingURL=update-movie-view.dto.js.map
const feedback = {
    paths : {
        "/feedback": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            get: {        // Phương thức gửi request: get, post, put, delete
                tags: ["Feedback"],
                summary: "lấy toàn bộ feedback trong hệ thống",
                description: "",
                operationId: "gets",
                consumes: ["application/json"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                   
                ],
                responses: {
                    "200:DONE": {
                        description: "status: 200 => Lấy dữ liệu thành công",
                        schema: {
                            $ref: "#/definitions/gets"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    },
                    "500:DONE": {
                        description: "status: 500 => Lấy dữ liệu thất bại",
                        schema: {
                            $ref: "#/definitions/getsError"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    },
                }
            }
        },
        // "/activate/{{idUser}}": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
        //     post: {        // Phương thức gửi request: get, post, put, delete
        //         tags: ["Authentication"],
        //         summary: "Xác thực OTP",
        //         description: "",
        //         operationId: "send",
        //         consumes: ["application/json"],    // Loại dữ liệu gửi đi
        //         produces: ["application/json"],       // Loại dữ liệu trả về
        //         parameters: [               // Các tham số
        //             {
        //                 "in": "application/json",      // Tham số được gửi lên từ form
        //                 "name": "otp",    // Tên tham số
        //                 "required": "true",    // Tham số là bắt buộc
        //                 "schema": {
        //                     "type": "string"   // Loại dữ liệu của tham số là chuỗi
        //                 },
        //                 "description": "OTP của người dùng nhận từ email"
        //             }
        //         ],
        //         responses: {
        //             "200:DONE": {
        //                 description: "status: 200 => Xác thực thành công",
        //                 schema: {
        //                     $ref: "#/definitions/gets"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
        //                 }
        //             },
        //             "500:ERROR": {
        //                 description: "status: 500 => Lấy dữ liệu không thành công !",
        //                 schema: {
        //                     $ref: "#/definitions/getsError"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
        //                 }
        //             },
        //         }
        //     }
        // }
    },
    // defination response
    definationResponse : {
        getsError: {                 // Tên đối tượng
            type: "object",         // Loại đối tượng là object
            properties: {           // Các thuộc tính của đối tượng
                message: {                  // Tên thuộc tính
                    type: "array",
                    example : [
                        'ERROR_SERVER'
                    ]    // Loại dữ liệu là số nguyên
                },
                status: {
                    type: "boolean",
                    example : false     // Loại dữ liệu là chuỗi
                }
            }
        },
        gets : {
            type : "object",
            properties: {           // Các thuộc tính của đối tượng
                message: {                  // Tên thuộc tính
                    type: "array",
                    example : [] // Loại dữ liệu là số nguyên
                },
                status: {
                    type: "boolean",
                    example : true     // Loại dữ liệu là chuỗi
                },
                data : {
                    type : "array",
                    example : [
                        {},{},{}
                    ]
                }
            }
        },
    }
}

export default feedback
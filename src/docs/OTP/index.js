const OTP = {
    paths : {
        "/activate/{{idUser}}/resend": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["Authentication"],
                summary: "Gửi lại mã OTP",
                description: "",
                operationId: "resend",
                consumes: ["application/json"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                   
                ],
                responses: {
                    "200:DONE": {
                        description: "status: 200 => Gửi lại OTP thành công",
                        schema: {
                            $ref: "#/definitions/resendOTP"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    },
                }
            }
        },
        "/activate/{{idUser}}": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["Authentication"],
                summary: "Xác thực OTP",
                description: "",
                operationId: "send",
                consumes: ["application/json"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                    {
                        "in": "application/json",      // Tham số được gửi lên từ form
                        "name": "otp",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "schema": {
                            "type": "string"   // Loại dữ liệu của tham số là chuỗi
                        },
                        "description": "OTP của người dùng nhận từ email"
                    }
                ],
                responses: {
                    "200:DONE": {
                        description: "status: 200 => Gửi OTP thành công",
                        schema: {
                            $ref: "#/definitions/send"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    },
                }
            }
        }
    },
    // defination response
    definationResponse : {
        resendOTP: {                 // Tên đối tượng
            type: "object",         // Loại đối tượng là object
            properties: {           // Các thuộc tính của đối tượng
                message: {                  // Tên thuộc tính
                    type: "array",
                    example : "[]"    // Loại dữ liệu là số nguyên
                },
                status: {
                    type: "boolean",
                    example : true     // Loại dữ liệu là chuỗi
                }
            }
        },
        send : {
            type : "object",
            properties: {           // Các thuộc tính của đối tượng
                message: {                  // Tên thuộc tính
                    type: "array",
                    example : "[]"    // Loại dữ liệu là số nguyên
                },
                status: {
                    type: "boolean",
                    example : true     // Loại dữ liệu là chuỗi
                }
            }
        }
    }
}

export default OTP
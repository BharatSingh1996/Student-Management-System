package com.student.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDto {
    private Long id;
    private String name;
    private String email;
    private String course;
    private Integer age;
    private String department;
}

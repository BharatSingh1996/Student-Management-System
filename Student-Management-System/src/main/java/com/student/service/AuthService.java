package com.student.service;

import com.student.dto.AuthResponse;
import com.student.dto.LoginRequest;

public interface AuthService {
    AuthResponse login(LoginRequest request);
    AuthResponse refresh(String refreshToken);
}

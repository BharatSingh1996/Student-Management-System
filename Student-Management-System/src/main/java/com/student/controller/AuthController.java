package com.student.controller;

import com.student.dto.AuthResponse;
import com.student.dto.LoginRequest;
import com.student.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        log.info("login with Id:: {}",request.getEmail());
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody LoginRequest request) {
        log.info("calling refresh token..");
        return ResponseEntity.ok(authService.refresh(request.getRefreshToken()));
    }
    @GetMapping("/validate")
    public ResponseEntity<String> validateToken() {
        log.info("page refreshing..");
        return ResponseEntity.ok("Token is valid ");
    }
}

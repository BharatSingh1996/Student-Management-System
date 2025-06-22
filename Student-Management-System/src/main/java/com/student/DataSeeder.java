//package com.student;
//import com.student.entity.Role;
//import com.student.entity.User;
//import com.student.entity.UserRole;
//import com.student.repository.RoleRepository;
//import com.student.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDate;
//
//@Component
//@RequiredArgsConstructor
//public class DataSeeder implements CommandLineRunner {
//
//    private final UserRepository userRepository;
//    private final RoleRepository roleRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public void run(String... args) throws Exception {
//        // 1. Get Role from DB (already inserted manually before)
//        Role studentRole = roleRepository.findByName("ADMIN")
//                .orElseThrow(() -> new RuntimeException("Role not found"));
//
//        // 2. Create new User
//        User user = new User();
//        user.setFullName("Bharat Admin");
//        user.setEmail("admin@gmail.com");
//        user.setPassword(passwordEncoder.encode("password123")); // encoded password
//        user.setMobile("8001451065");
//        user.setGender("Male");
//        user.setDateOfBirth(LocalDate.of(1996, 8, 24));
//        user.setAddress("Kolkata");
//        user.setProfilePicUrl(null); // optional
//        user.setActive(true);
//
//        // 3. Create UserRole (join entity)
//        UserRole userRole = new UserRole();
//        userRole.setUser(user);
//        userRole.setRole(studentRole);
//
//        // 4. Set relation in User entity
//        user.getUserRoles().add(userRole);
//
//        // 5. Save User (cascade will save UserRole also)
//        userRepository.save(user);
//
//        System.out.println("✅ Ravi Student inserted with STUDENT role.");
//    }
//}

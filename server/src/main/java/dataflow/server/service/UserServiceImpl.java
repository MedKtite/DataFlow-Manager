package dataflow.server.service;

import dataflow.server.dto.User;
import dataflow.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Select all users
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Select user by id
    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }


    // Create user
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Update user
    @Override
    public User updateUser(Long id, User user) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            User exisitingUser = existingUser.get();
            exisitingUser.setFirstName(user.getFirstName());
            exisitingUser.setLastName(user.getLastName());
            exisitingUser.setEmail(user.getEmail());
            exisitingUser.setPassword(user.getPassword());
            return userRepository.save(exisitingUser);
        } else {
            throw new RuntimeException("User not found with id " + id);
        }
    }

    // Delete user
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }



}

package dataflow.server.configuration;

import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {

    // Register the KeycloakAuthenticationProvider with the authentication manager
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(keycloakAuthenticationProvider());
    }

    // Use Spring Boot's default session authentication strategy
    @Bean
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    // Secure appropriate endpoints
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);
        http.authorizeHttpRequests((requests) -> requests
                .requestMatchers("/users*").hasRole("user")
                .requestMatchers("/admin*").hasRole("admin")
                .anyRequest().permitAll());
    }

    // Optional: If you need specific configuration, add it here
    @Override
    public void init(WebSecurity builder) throws Exception {
        // Optional: If you need any specific initialization, add it here
    }

    // Optional: If you need specific configuration, add it here
    @Override
    public void configure(WebSecurity builder) throws Exception {
        // Optional: If you need specific configuration, add it here
    }
}

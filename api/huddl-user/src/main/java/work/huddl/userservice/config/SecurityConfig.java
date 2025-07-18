package work.huddl.userservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
            .authorizeHttpRequests(auth ->
                    auth.requestMatchers("/api/v1/users/**").permitAll() // Allow all requests to user endpoints
                        .anyRequest().authenticated() // Require authentication for all other requests
                    )
            .logout(LogoutConfigurer::permitAll);
    return http.build();
  }

  @Bean
  public UserDetailsService userDetailsService() {

    UserDetails userDetails = User.withUserDetails(
            User.withUsername("user")
                .password("{noop}password") // {noop} indicates no password encoder is used
                .roles("USER")
                .build()
    ).build();

    return new InMemoryUserDetailsManager(userDetails);
  }
}

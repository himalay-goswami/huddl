package work.huddl.userservice.util;

import java.security.SecureRandom;

public class IdGeneratorUtil {

  public static String generateId() {

    final String text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    final StringBuilder sb = new StringBuilder();
    final SecureRandom random = new SecureRandom();

    for(int i = 0; i < 10; i++) {
      int index = random.nextInt(text.length());
      sb.append(text.charAt(index));
    }
    return sb.toString();
  }

  public static void main(String[] args) {
    // Example usage
    String generatedId = generateId();
    System.out.println("Generated ID: " + generatedId);
  }
}
